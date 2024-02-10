/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kuvKeHgo5ds
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card";

export default function Component() {
  return (
    <div className="grid gap-6 p-8 lg:grid-cols-3 lg:gap-10 xl:gap-16">
      <div className="space-y-4 lg:col-span-2 xl:space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Editar Perfil</h1>
          <p className="text-2xl font-bold">$120,000 - $140,000</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Información Personal</h2>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" placeholder="Ingresa tu número de teléfono" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Ubicación</Label>
            <Input id="location" placeholder="Ingresa tu ubicación" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Escribe algo sobre ti" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Educación</h2>
            <div className="space-y-2">
              <Label htmlFor="degree">Título Universitario</Label>
              <Input
                id="degree"
                placeholder="Ingresa tu título universitario"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="university">Universidad</Label>
              <Input
                id="university"
                placeholder="Ingresa tu universidad"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduation">Año de Graduación</Label>
              <Input
                id="graduation"
                placeholder="Año de graduación"
                required
                type="number"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Experiencia Laboral</h2>
            <div className="space-y-2">
              <Label htmlFor="position">Cargo</Label>
              <Input
                id="position"
                placeholder="Ingresa tu cargo actual"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                placeholder="Ingresa tu empresa actual"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="years">Años de Experiencia</Label>
              <Input
                id="years"
                placeholder="Años de experiencia"
                required
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-2xl font-bold">
              Información Faltante
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4">
            <div className="space-y-2">
              Ubicación: Ingresa tu ubicación para mejorar la busqueda
            </div>
            <div className="space-y-2">
              Habilidades: Ingresa tus habilidades. Nos permitirá realizar una
              búsqueda más acertada.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-2xl font-bold">
              Trabajos Sugeridos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                Frontend Developer - Acme Corp
              </p>
              <p>Remoto | $100,000 - $120,000</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                UI/UX Designer - Tech Solutions
              </p>
              <p>Local | $80,000 - $100,000</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                Full Stack Engineer - WebWorks
              </p>
              <p>Remoto | $120,000 - $140,000</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
