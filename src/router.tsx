import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { GeneralLayout } from './components/layouts/general';
import { ServicesPage } from './pages/services';
import { ServicesSelectionPage } from './pages/services-selection';
import { ServicesDetailsPage } from './pages/services-details';
import { AccountsPage } from './pages/accounts';
import { AccountSelectionPage } from './pages/account-selection';
import { AccountsDetailsPage } from './pages/accounts-details';
import { NotificationsPage } from './pages/notifications';
import { NotificationsDetailsPage } from './pages/notifications-details';
import { TermsConditionsPage } from './pages/terms-conditions';

export const Router = () => (
  <BrowserRouter>
    <Routes location={location}>
      <Route index element={<HomePage />} />
      <Route path="/" element={<GeneralLayout />}>
        <Route path="services" element={<ServicesPage />} />
        <Route path="services-selection" element={<ServicesSelectionPage />} />
        <Route path="services/:name" element={<ServicesDetailsPage />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="accounts-selection" element={<AccountSelectionPage />} />
        <Route path="accounts/:email/:index" element={<AccountsDetailsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="notifications/:id" element={<NotificationsDetailsPage />} />
        <Route path="terms-conditions" element={<TermsConditionsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
