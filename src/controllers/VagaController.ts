import { Request, Response } from "express";
import { Vaga } from "../models/index";

class VagaController {

    async listarVagas(req: Request, res: Response) {
        const todasVagas = await Vaga.findAll();

        return res.status(200).json(todasVagas);
    }


    async criarVagas(req: Request, res: Response) {
        const { titulo, tipo, localidade, salario, sobre, requisitos, infos_adicionais, id_empresa } = req.body;
        const novaVaga = await Vaga.create({
            titulo, tipo, localidade, salario, sobre, requisitos, infos_adicionais, id_empresa
        });
        return res.status(201).json(novaVaga)
    }
}

export default new VagaController();

