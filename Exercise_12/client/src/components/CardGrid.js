import './CardGrid.css';

function CardGrid() {
  return (
    <article className="card-grid">
      <section>
        <h2>📚 <strong>Reading</strong></h2>
        <img src="/Assets/Reading.jpg" alt="Reading" />
        <p>
          I love diving into both fiction and non-fiction; they let me escape reality for a while.
          From Harry Potter to Stephen King thrillers, and books on entrepreneurship and thinking big—I enjoy them all.
        </p>
      </section>
      <section>
        <h2>💪 <strong>Gym</strong></h2>
        <img src="/Assets/Gym.jpg" alt="Gym" />
        <p>
          The gym keeps my mind and body aligned. It’s my go-to for mental peace and stress relief.
          I focus on strength training, and hitting new PRs always keeps me motivated.
        </p>
      </section>
      <section>
        <h2>🗄️ <strong>Work</strong></h2>
        <img src="/Assets/Work.jpg" alt="Work" />
        <p>
          I run a design entity called Design Duh, a team of nine building open-source products for developers and designers.
          We also offer mentorship sessions and believe design is art—something we express through everything we create.
        </p>
      </section>
    </article>
  );
}

export default CardGrid;
