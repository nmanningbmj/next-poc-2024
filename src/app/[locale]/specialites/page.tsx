interface Specialty {
  name: string;
}

export default async function Page() {
  const res = await fetch(
    "https://dev.contentds-api.tf.aws.bmjgroup.com/specialty/all"
  );

  const data = await res.json();

  return (
    <main>
      <h1>BP specialites</h1>
      <div className="specialties">
        <div className="container">
          <ul>
            {data.map((specialty: Specialty) => (
              <li key={specialty.name}>{specialty.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
