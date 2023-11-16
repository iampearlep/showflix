export default function Page({ params }: { params: { slug: string } }) {
    return <div className="text-white">Movie: {params.slug}</div>
  }