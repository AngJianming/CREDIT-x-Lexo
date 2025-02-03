// // src/main.cpp
// #include <pistache/endpoint.h>
// #include <pistache/router.h>
// #include <pistache/http.h>
// #include <nlohmann/json.hpp>
// #include <fstream>
// #include "AIHandler.h"
// #include "KnowledgeBase.h"

// using namespace Pistache;
// using json = nlohmann::json;

// void handleAIRequest(const Rest::Request& request, Http::ResponseWriter response, AIHandler& aiHandler, KnowledgeBase& kb) {
//     auto query = request.param(":query").as<std::string>();
//     std::string answer = aiHandler.getAnswer(query, kb);
//     json res;
//     res["answer"] = answer;
//     response.send(Http::Code::Ok, res.dump(), MIME(Application, Json));
// }

// int main() {
//     Port port(9080);
//     Address addr(Ipv4::any(), port);

//     auto opts = Http::Endpoint::options().threads(1);
//     Http::Endpoint server(addr);
//     server.init(opts);

//     Rest::Router router;
//     AIHandler aiHandler;
//     KnowledgeBase kb;
//     kb.loadKnowledgeBase("data/knowledge_base.json");

//     Rest::Routes::Get(router, "/api/ai/:query", [&](const Rest::Request& request, Http::ResponseWriter response) {
//         handleAIRequest(request, response, aiHandler, kb);
//     });

//     std::cout << "Server is running on port " << port << std::endl;
//     server.setHandler(router.handler());
//     server.serve();
// }
