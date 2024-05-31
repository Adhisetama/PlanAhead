import prisma from "../../../utils/connect";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { isCompleted } = await req.json();
  
    const task = await prisma.task.update({
      where: { id },
      data: { isCompleted },
    });
  
    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}