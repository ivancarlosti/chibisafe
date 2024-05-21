import { cn } from '@/lib/utils';
import { ChibisafeDefaultLogo } from '@/components/svg/ChibisafeLogo';
import Link from 'next/link';

export function SiteFooter({ className = '' }: { readonly className?: string }) {
	return (
		<footer className={cn(className, 'bg-background-transparent')}>
			<div className="container flex flex-col place-items-center place-content-between gap-4 py-5 md:flex-row">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<p className="text-center text-sm leading-loose md:text-left">
			The information provided or shared by this website comes with no warranty of any kind, expressed or implied, regarding confidentiality, integrity, or availability. Under no circumstances will  {' '}
            <a href="https://ivancarlos.com.br" target="_blank" className="font-medium underline underline-offset-4">
            Ivan Carlos Consultoria
            </a>  {' '}
            be liable to you for any loss or damage of any kind incurred as a result of using the website. Visit  {' '}
            <a href="https://pad.vg/privacy" target="_blank" className="font-medium underline underline-offset-4">
            pad.vg/privacy
            </a>  {' '}
            to review our privacy policy. Recreated by {' '}
			<a href="https://pad.vg/ivancarlos" target="_blank" className="font-medium underline underline-offset-4">
			Ivan Carlos
			</a>  {' '}
			for exclusive internal use.
			<br /><br />
			As informações fornecidas ou compartilhadas por esse site não possuem garantia de qualquer tipo, expressa ou implícita, quanto à confidencialidade, integridade ou disponibilidade. Em nenhuma circunstância  {' '}
            <a href="https://ivancarlos.com.br" target="_blank" className="font-medium underline underline-offset-4">
            Ivan Carlos Consultoria
            </a>  {' '}
            terá qualquer responsabilidade para com você por qualquer perda ou dano de qualquer tipo incorrido como resultado do uso do site. Seu uso e sua confiança em qualquer informação no site é por sua conta e risco. Acesse  {' '}
            <a href="https://pad.vg/privacidade" target="_blank" className="font-medium underline underline-offset-4">
            pad.vg/privacidade
            </a>  {' '}
            para consultar nossa política de privacidade. Recriado por {' '}
			<a href="https://pad.vg/ivancarlos" target="_blank" className="font-medium underline underline-offset-4">
			Ivan Carlos
			</a>  {' '}
			para uso exclusivo e interno.
			<br /><br />
			La información proporcionada o compartida por este sitio no tiene garantía de ningún tipo, expresa o implícita, en cuanto a confidencialidad, integridad o disponibilidad. En ningún caso,  {' '}
            <a href="https://ivancarlos.com.br" target="_blank" className="font-medium underline underline-offset-4">
            Ivan Carlos Consultoria
            </a>  {' '}
            será responsable ante usted por cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso del sitio. Visite  {' '}
            <a href="https://pad.vg/privacidad" target="_blank" className="font-medium underline underline-offset-4">
            pad.vg/privacidad
            </a>  {' '}
            para consultar nuestra política de privacidad. Recreado por {' '}
			<a href="https://pad.vg/ivancarlos" target="_blank" className="font-medium underline underline-offset-4">
			Ivan Carlos
			</a>  {' '}
			para uso exclusivo e interno.
					</p>
				</div>
			</div>
		</footer>
	);
}
