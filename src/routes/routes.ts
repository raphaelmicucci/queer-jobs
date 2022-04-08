import express from "express";
import CandidatoController from "../controllers/CandidatoController";
import EmpresaController from "../controllers/EmpresaController";
import CertificadoController from "../controllers/CertificadoController";
import FormacaoController from "../controllers/FormacaoController";
import ExperienciaController from "../controllers/ExperienciaController";
import UsuarioController from "../controllers/UsuarioController";
import VagaController from "../controllers/VagaController";
import BeneficioController from "../controllers/BeneficioController";

export const routes = express.Router();

routes.post("/usuarios", UsuarioController.criarUsuario);

routes.post("/candidatos", CandidatoController.criarCandidato);
routes.put("/candidatos/:id_candidato", CandidatoController.atualizarCandidato);
routes.post("/candidatos/formacao", FormacaoController.criarFormacao);
routes.post("/candidatos/certificados", CertificadoController.criarCertificado);
routes.post("/candidatos/experiencias", ExperienciaController.criarExperiencia);

routes.post("/empresas", EmpresaController.criarEmpresa);

routes.post("/vagas", VagaController.criarVagas);
routes.get("/vagas", VagaController.listarVagas);
routes.post("/vagas/beneficios", BeneficioController.criarBeneficio);



