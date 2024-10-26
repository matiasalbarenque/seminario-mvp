import { Footer } from '@/components/footer';
import { RiskServicesChart } from '@/components/home-chart';
import { HomeMonitor } from '@/components/home-monitor';
import { HomeRiskMessage } from '@/components/home-risk-message';
import { HomeWelcomeCard } from '@/components/home-welcome-card';
import { SplashScreen } from '@/components/splashscreen';

export const HomePage = () => {
  return (
    <>
      <div className="h-dvh grid grid-rows-[auto,min-content]">
        <section className="flex-1 flex flex-col overflow-auto">
          <HomeMonitor />
          <HomeRiskMessage />
          <RiskServicesChart />
          <HomeWelcomeCard />
        </section>
        <Footer />
      </div>
      {/* <SplashScreen /> */}
    </>
  );
};
