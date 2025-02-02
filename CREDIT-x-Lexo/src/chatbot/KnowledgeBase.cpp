// src/KnowledgeBase.cpp
#include "KnowledgeBase.h"
#include <fstream>
#include <algorithm>

KnowledgeBase::KnowledgeBase() {}

void KnowledgeBase::loadKnowledgeBase(const std::string& filepath) {
    std::ifstream file(filepath);
    if (file.is_open()) {
        file >> kb;
        file.close();
    } else {
        // Handle error
    }
}

std::string KnowledgeBase::getRelevantInfo(const std::string& query) const {
    // Simple keyword matching for demonstration
    std::string relevant_info = "No relevant information found.";

    for (auto& item : kb.items()) {
        std::string topic = item.key();
        if (query.find(topic) != std::string::npos) {
            relevant_info = item.value().get<std::string>();
            break;
        }
    }

    return relevant_info;
}
