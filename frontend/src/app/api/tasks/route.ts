import { NextResponse } from "next/server";
import prisma from "../../utils/connect";
import { Priority } from "@prisma/client";


export async function POST(req: Request) {
  try {
    const { title, description, date, date2, date3, repeatable, priority } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({ error: "Missing required fields", status: 400 });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        date2,
        date3,
        isCompleted: false,
        isRepeatable: repeatable,
        priority,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
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

export async function GET(req: Request) {
  try {
    //di sini ada auth user kalo make user

    const tasks = await prisma.task.findMany();
    console.log("AGENDA APA AJA: ", tasks)
    return NextResponse.json(tasks)

  } catch (error) {
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
  }
}

export async function UPDATE(req: Request) {
  try {
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 501 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 502 });
  }
}
