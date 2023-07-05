import { connectToDB } from '@lib/db';
import Users from '@models/user';
import { NextResponse } from 'next/server';

const unauthorisedError = () =>
  NextResponse.json(
    { message: 'Username or password is wrong!', status: 401 },
    { status: 401 }
  );

export async function POST(req: Request, res: Response) {
  const { username, password } = await req.json();

  const { USER_ONE, USER_TWO } = process.env;
  if (username !== USER_ONE && username !== USER_TWO) {
    return unauthorisedError();
  }

  try {
    await connectToDB();

    const user = await Users.findOne({ username, password });

    if (!user) {
      return unauthorisedError();
    }

    return NextResponse.json({ role: user.role, status: 200 }, { status: 200 });
  } catch (error) {
    console.log('ERROR FINDING USER', { error });
  }
}
