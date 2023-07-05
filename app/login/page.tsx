'use client';
import { FormEventHandler, useState } from 'react';

type LoginResponse = {
  role: string;
  status: number;
  message?: string;
};

function Login() {
  const [error, setError] = useState<Error | null>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(formEntries),
      });

      const data: LoginResponse = await response.json();

      if (data.status === 200) {
        console.log({ data });
      } else {
        throw new Error(data?.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error({ error }, 'Error while logging in!!');
      if (error instanceof Error) {
        setError(error);
      }
    }
  };

  return (
    <main className="flex items-center justify-center gap-8 h-[calc(100vh-9rem)]">
      <section className="flex flex-col justify-center gap-8 -translate-y-16 w-96 h-max">
        <h2 className="self-center text-2xl">Login</h2>
        <form method="post" className="flex flex-col gap-4" onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="input"
            name="username"
            id="username"
            type="text"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            name="password"
            id="password"
            type="password"
            required
          />
          <button type="submit" className="mt-7 btn-primary">
            Login
          </button>
        </form>
        {error?.message && <p>{error.message}</p>}
      </section>
    </main>
  );
}

export default Login;
