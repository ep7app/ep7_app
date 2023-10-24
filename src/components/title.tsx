type Props = {
  title: string
}

export const Title = (props: Props) => (
  <h1 className="text-2xl font-bold text-grey-900 mb-10">{props.title}</h1>
);
