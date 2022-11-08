"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { schema } from "./Schema";
const cors_1 = __importDefault(require("cors"));
// import { createConnection } from "typeorm";
// import { Users } from "./Entities/Users";
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    //   await createConnection({
    //     type: "mysql",
    //     database: "GraphqlCRUD",
    //     username: "root",
    //     password: "password",
    //     logging: true,
    //     synchronize: false,
    //     entities: [Users],
    //   });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    //   app.use(
    //     "/graphql",
    //     graphqlHTTP({
    //       schema,
    //       graphiql: true,
    //     })
    //   );
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
});
main().catch((err) => {
    console.log(err);
});
