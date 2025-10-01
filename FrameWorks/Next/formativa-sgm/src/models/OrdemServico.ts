//classe de modelagem de dados para Usuários
//mongoose -> vai ajusar na modelagem da classe

import mongoose, { Document, Model, Schema } from "mongoose";

//atributos
export interface IOrdemServico extends Document {
  _id: string;
  titulo: string;
  descricao: string;
  idEquipamento: string;
  idTecnico: string;
  tipoManutencao: string;
  status: string,
  dataSolicitada: Date,
  dataFinalizacao: Date,
}

//Schema da Classe ( Construtor)
const OrdemServicoSchema: Schema<IOrdemServico> = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  tipoManutencao: { type: String, required: true },
  status: { type: String, enum: ["aberta","andamento","fechada"], default: "aberta" },
  dataSolicitada: { type: Date, default: Date.now },
  dataFinalizacao: { type: Date },
  idTecnico: { type: String, required: true },
  idEquipamento: { type: String, required: true },
});


//toMap <=> fromMap

const OrdemServico: Model<IOrdemServico> = mongoose.models.OrdemServico
|| mongoose.model<IOrdemServico>("OrdemServico", OrdemServicoSchema);

// componente reutilizavel

export default OrdemServico;