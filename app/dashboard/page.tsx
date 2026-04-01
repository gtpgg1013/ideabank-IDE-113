export default function DashboardPage() {
  return (
    <main className="dashboard">
      <section className="hero">
        <p className="eyebrow">Protected Workspace</p>
        <h1 className="title">IdeaBank 비공개 작업 공간</h1>
        <p className="body-copy">
          인증에 성공한 사용자만 이 화면에 접근할 수 있습니다. 실제 서비스
          콘텐츠가 들어갈 보호 경로의 예시 페이지입니다.
        </p>
      </section>

      <section className="grid">
        <article className="tile">
          <h2>Session</h2>
          <p className="body-copy">
            인증 성공 시 HTTP-only 쿠키가 설정되어 새로고침과 페이지 이동 후에도
            다시 로그인할 필요가 없습니다.
          </p>
        </article>
        <article className="tile">
          <h2>Routing</h2>
          <p className="body-copy">
            미인증 상태에서 보호 경로에 접근하면 루트 비밀번호 페이지로 즉시
            리다이렉트됩니다.
          </p>
        </article>
        <article className="tile">
          <h2>Config</h2>
          <p className="body-copy">
            기본 비밀번호는 <code>ideabank2026</code>이며{" "}
            <code>ACCESS_PASSWORD</code>로 변경할 수 있습니다.
          </p>
        </article>
      </section>
    </main>
  );
}
