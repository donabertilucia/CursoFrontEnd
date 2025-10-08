// Rotas de requisição api que não usam ID
import { createEquipamento, getAllEquipamento } from "@/controllers/EquipamentoController";
import { NextResponse } from "next/server";

// get
export async function GET() {
    try {
        const equipamentos = await getAllEquipamento();
        return NextResponse.json({success:true, data: equipamentos});
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}

export async function POST(req:NextResponse){
    try {
        const data = await req.json();
        const novoEquipamento = await createEquipamento(data);
        return NextResponse.json({ success: true, data:novoEquipamento});
    } catch (error) {
        return NextResponse.json({ success: false, data:error });
    }
    
}

// post