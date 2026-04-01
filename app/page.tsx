import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, isAuthenticated } from "@/lib/auth";

export default async function HomePage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const cookieStore = await cookies();

  if (isAuthenticated(cookieStore.get(AUTH_COOKIE_NAME)?.value)) {
    redirect("/dashboard");
  }

  const params = await searchParams;
  const showError = params.error === "invalid";

  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">IdeaBank Secure Access</p>
        <h1 className="title">비밀번호를 입력해 작업 공간에 접속하세요.</h1>
        <p className="body-copy">
          모든 보호 경로는 인증 쿠키가 없으면 다시 이 화면으로 이동합니다.
        </p>
        <form className="form" action="/api/auth/login" method="post">
          <label className="label">
            Access Password
            <input
              className="input"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </label>
          {showError ? (
            <p className="error">비밀번호가 올바르지 않습니다.</p>
          ) : null}
          <button className="button" type="submit">
            계속하기
          </button>
        </form>
      </section>
    </main>
  );
}
