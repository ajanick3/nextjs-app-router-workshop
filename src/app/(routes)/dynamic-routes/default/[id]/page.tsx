export async function generateStaticParams() {
  // const data = await fetch('https://.../some-data-api').then((res) => res.json())
  // rework data to return an array of objects with an id property

  return [
    {
      id: '1234',
    },
    {
      id: '5678',
    },
  ];
}
type params = { id: string };
type searchParams = { [key: string]: string | string[] | undefined };

interface DynamicPageProps<params, U> {
  params: Promise<params>;
  searchParams: Promise<U>;
}

export default async function Page(
  props: DynamicPageProps<params, searchParams>
) {
  const params = await props.params;
  const { id } = params;
  const searchParams = await props.searchParams;
  const { name, surname } = searchParams;

  return (
    <div>
      <div className='p-4 bg-gray-800'>My dynamic parameter: {id}</div>
      My search parameters: {name} {surname}
    </div>
  );
}
