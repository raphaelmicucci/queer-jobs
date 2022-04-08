import { Request, Response } from "express";
import { Certificado } from "../models/index";

class CertificadoController {

    async criarCertificado(req: Request, res: Response) {
        const { area_estudo, instituicao, modalidade, data_inicio, data_fim, id_candidato } = req.body;
        const novoCertificado = await Certificado.create({
            area_estudo, instituicao, modalidade, data_inicio, data_fim, id_candidato
        });
        return res.status(201).json(novoCertificado)
    }
}

export default new CertificadoController();