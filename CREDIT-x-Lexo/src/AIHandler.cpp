// src/AIHandler.cpp
#include "AIHandler.h"
#include <cpr/cpr.h>
#include <nlohmann/json.hpp>
#include <iostream>

using json = nlohmann::json;

AIHandler::AIHandler() {
    // Initialize if needed
}

std::string AIHandler::getAnswer(const std::string& query, const KnowledgeBase& kb) {
    // Formulate prompt based on query and knowledge base
    std::string prompt = "Knowledge Base: " + kb.getRelevantInfo(query) + "\n\nUser Query: " + query + "\n\nAnswer:";
    return callOpenAI(prompt);
}

std::string AIHandler::callOpenAI(const std::string& prompt) {
    std::string api_key = "YOUR_OPENAI_API_KEY"; // Replace with your API key

    json request_body = {
        {"model", "gpt-4"},
        {"prompt", prompt},
        {"max_tokens", 150},
        {"temperature", 0.7}
    };

    cpr::Response r = cpr::Post(
        cpr::Url{"https://api.openai.com/v1/completions"},
        cpr::Header{
            {"Authorization", "Bearer " + api_key},
            {"Content-Type", "application/json"}
        },
        cpr::Body{request_body.dump()}
    );

    if (r.status_code != 200) {
        std::cerr << "OpenAI API request failed with status code: " << r.status_code << std::endl;
        return "I'm sorry, I couldn't process your request at the moment.";
    }

    json response_json = json::parse(r.text);
    if (response_json.contains("choices") && response_json["choices"].size() > 0) {
        return response_json["choices"][0]["text"].get<std::string>();
    }

    return "I'm sorry, I couldn't generate a response.";
}
