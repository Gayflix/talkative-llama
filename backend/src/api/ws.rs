use crate::handler::model::{run_inference, session_setup};
use actix_web::{web, Error, HttpRequest, HttpResponse};
use actix_ws::Message;
use llm::{models::Llama, InferenceSession};
use std::sync::Arc;
use tokio::time::{timeout, Duration};
use tokio_stream::StreamExt;

pub async fn ws(
    req: HttpRequest,
    body: web::Payload,
    model: web::Data<Arc<Llama>>,
) -> Result<HttpResponse, Error> {
    let (response, mut session, mut msg_stream) = actix_ws::handle(&req, body)?;
    let model = model.as_ref().clone();
    let model_clone = model.clone();

    println!("Started websocket connection...");
    actix_rt::spawn(async move {
        println!("Preparing inference model...");
        let inference_session: InferenceSession =
            web::block(move || session_setup(model)).await.unwrap();

        let inference_session = Arc::new(std::sync::Mutex::new(inference_session));
        println!("Initialized inference session.");

        while let Some(Ok(msg)) = msg_stream.next().await {
            match msg {
                Message::Ping(bytes) => {
                    if session.pong(&bytes).await.is_err() {
                        return;
                    }
                }
                Message::T