/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HhiCkuF1sD3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card, CardTitle, CardHeader } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

export default function Component() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-10 xl:gap-16 p-8">
      <div className="space-y-4 lg:col-span-2 xl:space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            Ingeniero Frontend Senior (Remoto)
          </h1>
          <p className="text-2xl font-bold">$120,000 - $140,000</p>
        </div>
        <div className="space-y-2">
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <img
                  alt="Logo"
                  className="aspect-square overflow-hidden rounded-full object-cover"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
                <div className="space-y-2">
                  <div className="text-3xl font-bold">Acme Inc</div>
                  <div className="text-2xl font-bold">Ingeniero Frontend</div>
                  <div>Remoto</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Descripción</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Estamos buscando un Ingeniero Frontend Senior para unirse a
              nuestro equipo. Serás responsable de diseñar y construir el
              frontend de nuestras aplicaciones web de próxima generación.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Calificaciones</h2>
            <ul className="list-inside list-disc">
              <li>5+ años de experiencia en desarrollo frontend</li>
              <li>Conocimientos sólidos de JavaScript y frameworks modernos</li>
              <li>Experiencia con diseño web receptivo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-2xl font-bold">Aplicar Ahora</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                placeholder="Ingresa tu correo electrónico"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Sitio Web Personal</Label>
              <Input id="website" placeholder="Ingresa tu sitio web" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Ingresa tu mensaje"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Sube tu currículum</Label>
              <Input accept=".pdf" id="resume" type="file" />
            </div>
            <Button className="w-full" type="submit">
              Enviar Aplicación
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
