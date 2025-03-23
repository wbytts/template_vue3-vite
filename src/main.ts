import "./styles";
import { mountApplication } from "./app";
import BywPlugin from "@/plugins/byw";

mountApplication({
    plugins: [
        BywPlugin
    ]
});
