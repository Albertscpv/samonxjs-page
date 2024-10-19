import Link from "next/link"

export default function Home() {

  return (
    <div className="min-h-screen">
        <div id="main-container" className="relative h-screen p-2">
          <div className="[grid-area:main] p-12 place-content-center text-center">
              <h2 className="font-bold text-6xl font-geistS text-white">Bienvenidos a Samo D</h2>
              <span className="block text-xl">Innovación en soluciones, eficiencia en resultados</span>
              <Link href="/about">
                <button className="p-4 bg-white text-black my-6">
                  Get Started
                </button>
              </Link>
          </div>

          {/* General info and preview about our employees and portflio */}
          {/* Preview to go into our services */}
          {/* Our contact info */}
        </div>
    </div>
  );
}
