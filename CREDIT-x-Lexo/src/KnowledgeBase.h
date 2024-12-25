// src/KnowledgeBase.h
#ifndef KNOWLEDGEBASE_H
#define KNOWLEDGEBASE_H

#include <string>
#include <nlohmann/json.hpp>

class KnowledgeBase {
public:
    KnowledgeBase();
    void loadKnowledgeBase(const std::string& filepath);
    std::string getRelevantInfo(const std::string& query) const;
private:
    nlohmann::json kb;
};

#endif // KNOWLEDGEBASE_H
