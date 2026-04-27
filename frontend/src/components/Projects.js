export function Projects({ projects }) {
  return (
    <section className="container py-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map(p => (
          <div className="col-md-4" key={p._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>{p.description}</p>
                <a href={p.link} className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}