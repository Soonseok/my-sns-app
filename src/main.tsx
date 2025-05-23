import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Toaster, toaster } from "./components/ui/toaster";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ColorModeButton } from "./components/ui/color-mode";
import { Center } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Toaster />
      <RouterProvider router={router} />
      {/* 다크/ㅏㄹ이트 모드 전환 버튼. 나중에 header로 옮길 것 */}
      <Center py={4}>
        <ColorModeButton />
      </Center>
    </Provider>
  </React.StrictMode>
);
