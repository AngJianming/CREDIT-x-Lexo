# CMakeLists.txt
cmake_minimum_required(VERSION 3.5)
project(lexo-ai-backend)

set(CMAKE_CXX_STANDARD 14)

find_package(Pistache REQUIRED)
find_package(nlohmann_json 3.2.0 REQUIRED)

include_directories(include)

add_executable(lexo-ai-backend src/main.cpp src/AIHandler.cpp src/KnowledgeBase.cpp)

target_link_libraries(lexo-ai-backend Pistache::pistache nlohmann_json::nlohmann_json)
