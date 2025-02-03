// #include <stdio.h>
// #include <stdlib.h>
// #include <onnxruntime/core/session/onnxruntime_c_api.h>

// // Macro for error checking using the ONNX Runtime C API.
// #define CHECK_STATUS(expr)                                  \
//     do                                                      \
//     {                                                       \
//         OrtStatus *status = (expr);                         \
//         if (status != NULL)                                 \
//         {                                                   \
//             const char *msg = ort->GetErrorMessage(status); \
//             fprintf(stderr, "Error: %s\n", msg);            \
//             ort->ReleaseStatus(status);                     \
//             exit(1);                                        \
//         }                                                   \
//     } while (0)

// // Global pointer to the ONNX Runtime API (obtained at runtime)
// const OrtApi *ort;

// int main()
// {
//     // === Initialize ONNX Runtime Environment ===
//     ort = OrtGetApiBase()->GetApi(ORT_API_VERSION);
//     OrtEnv *env = NULL;
//     CHECK_STATUS(ort->CreateEnv(ORT_LOGGING_LEVEL_WARNING, "chatbot", &env));

//     // === Create Session Options and the Inference Session ===
//     OrtSessionOptions *session_options = NULL;
//     CHECK_STATUS(ort->CreateSessionOptions(&session_options));
//     // Set graph optimization (optional but recommended)
//     ort->SetSessionGraphOptimizationLevel(session_options, ORT_ENABLE_ALL);

//     // Path to your pretrained generative model (e.g. GPT-2 in ONNX format)
//     const char *model_path = "gpt2.onnx";
//     OrtSession *session = NULL;
//     CHECK_STATUS(ort->CreateSession(env, model_path, session_options, &session));

//     // === Prepare Input Data ===
//     // In a complete implementation you would:
//     // 1. Read user input from the console.
//     // 2. Optionally load and append text from your "knowledge.txt" file.
//     // 3. Tokenize the combined prompt into input token IDs.
//     //
//     // For this skeleton, we use a dummy token array.
//     int64_t input_ids[] = {50256}; // e.g., a beginning-of-text token (adjust as needed)
//     size_t input_ids_len = sizeof(input_ids) / sizeof(input_ids[0]);

//     // Define the tensor shape: [batch_size, sequence_length]
//     int64_t dims[] = {1, (int64_t)input_ids_len};

//     // Create memory info for the tensor (using CPU memory)
//     OrtMemoryInfo *memory_info = NULL;
//     CHECK_STATUS(ort->CreateCpuMemoryInfo(OrtArenaAllocator, OrtMemTypeDefault, &memory_info));

//     // Create the input tensor from the data
//     OrtValue *input_tensor = NULL;
//     CHECK_STATUS(ort->CreateTensorWithDataAsOrtValue(memory_info, input_ids, sizeof(input_ids), dims, 2, ONNX_TENSOR_ELEMENT_DATA_TYPE_INT64, &input_tensor));

//     // Verify that the created OrtValue is indeed a tensor
//     int is_tensor;
//     CHECK_STATUS(ort->IsTensor(input_tensor, &is_tensor));
//     if (!is_tensor)
//     {
//         fprintf(stderr, "Input is not a tensor.\n");
//         exit(1);
//     }

//     // === Run Inference ===
//     // Input and output names must match those defined in your ONNX model.
//     const char *input_names[] = {"input_ids"};
//     const char *output_names[] = {"logits"}; // Adjust based on your model’s output node name

//     OrtValue *output_tensor = NULL;
//     CHECK_STATUS(ort->Run(session, NULL,
//                           input_names, (const OrtValue *const *)&input_tensor, 1,
//                           output_names, 1,
//                           &output_tensor));

//     // === Process the Output ===
//     // In a complete chatbot you would:
//     // 1. Process the logits to choose the next token (or sample a token).
//     // 2. Append the token to your conversation history.
//     // 3. Convert the token(s) back into human‑readable text (requires a tokenizer/vocabulary mapping).
//     //
//     // For this skeleton, we simply print the first few output values.
//     float *output_data;
//     CHECK_STATUS(ort->GetTensorMutableData(output_tensor, (void **)&output_data));

//     printf("Output logits (first 10 values):\n");
//     for (int i = 0; i < 10; i++)
//     {
//         printf("%f ", output_data[i]);
//     }
//     printf("\n");

//     // === Clean Up Resources ===
//     ort->ReleaseValue(output_tensor);
//     ort->ReleaseValue(input_tensor);
//     ort->ReleaseMemoryInfo(memory_info);
//     ort->ReleaseSession(session);
//     ort->ReleaseSessionOptions(session_options);
//     ort->ReleaseEnv(env);

//     return 0;
// }
