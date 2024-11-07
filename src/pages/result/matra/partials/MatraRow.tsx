type TyMatraTabel = {
  title: string;
  children: React.ReactNode;
}

export default function MatraRow(props: TyMatraTabel) {
  return (
    <div className="sect">
      <div className="head">
        {props.title}
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}
