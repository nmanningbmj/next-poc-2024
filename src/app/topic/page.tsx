import Link from "next/link";

interface TopicData {
  poceTopicId: string;
}

export default async function Page() {
  const res = await fetch(
    "http://live.contentds-api.tf.aws.bmjgroup.com/topic-mapping/all",
    {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const data: TopicData[] = await res.json();

  return (
    <main>
      <h1>Topic list</h1>
      {data.map((item: TopicData) => (
        <div key={item.poceTopicId}>
          <Link href={`topic/${item.poceTopicId}`}>
            <p>Topic ID: {item.poceTopicId}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}
