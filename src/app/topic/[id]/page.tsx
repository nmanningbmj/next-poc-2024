interface TopicData {
  poceTopicId: string;
}

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `http://live.contentds-api.tf.aws.bmjgroup.com/content?id=${params.id}&lang=en-gb&type=poce_cm`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    }
  );

  const data: TopicData[] = await res.json();
  console.log(data);

  return (
    <main>
      <h1>BP topic {params.id}</h1>
      <p>{data.topic.metadata["topic-title"]}</p>
      <p>{data.topic.metadata["last-updated"]}</p>
    </main>
  );
}
