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
    mod