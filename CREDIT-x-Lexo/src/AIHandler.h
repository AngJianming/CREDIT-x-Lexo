// src/AIHandler.h
#ifndef AIHANDLER_H
#define AIHANDLER_H

#include <string>
#include "KnowledgeBase.h"

class AIHandler {
public:
    AIHandler();
    std::string getAnswer(const std::string& query, const KnowledgeBase& kb);
private:
    std::string callOpenAI(const std::string& prompt);
};

#endif // AIHANDLER_H
