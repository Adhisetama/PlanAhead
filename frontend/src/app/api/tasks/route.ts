import { NextResponse } from "next/server";
import prisma from "../../utils/connect";


export async function POST(req: Request) {
  try {
    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
        return NextResponse.json({error: "Missing required fields", status: 400,});
    }

    const task = await prisma.task.create({
        data: {
            title,
            description,
            date,
            isCompleted: completed,
            isImportant: important,
        },
    });
    console.log('TASK CREATED: ', task);
    return NextResponse.json(task);

  } catch (error) {
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    //di sini ada auth user kalo make user

    const tasks = await prisma.task.findMany();
    console.log("TASKS: ", tasks)
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
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: "Error Creating Task", status: 500 });
  }
}
