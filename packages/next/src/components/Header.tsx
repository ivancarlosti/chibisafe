import { Navigation } from '@/components/Navigation';
import { NavigationUser } from '@/components/NavigationUser';
import { DiscordLogo } from '@/components/svg/DiscordLogo';
import { GitHubLogo } from '@/components/svg/GitHubLogo';
import { PatreonLogo } from '@/components/svg/PatreonLogo';
import { UploadProgress } from '@/components/UploadProgress';
import { buttonVariants } from '@/styles/button';
import { ChibisafeLogo } from './svg/ChibisafeLogo';
import request from '@/lib/request';

export const Header = async () => {
	const { data } = await request.get({
		url: 'settings',
		options: {
			next: {
				tags: ['settings']
			}
		}
	});

	return (
		<header className="container z-40">
			<div className="flex h-16 sm:h-20 place-content-between place-items-center">
				<Navigation logo={<ChibisafeLogo className="w-6 h-6" />} serviceName={data?.serviceName} />
				<UploadProgress />
				<nav className="flex items-center gap-1">
					<div className="hidden md:inline-flex ml-4">
						<NavigationUser />
					</div>
				</nav>
			</div>
		</header>
	);
};
