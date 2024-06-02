import prisma from "../../../../utils/connect";
import { NextResponse } from "next/server";


export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = await req.json();

    const task = await prisma.task.update({
      where: { id },
      data: data,
    });
  
    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}