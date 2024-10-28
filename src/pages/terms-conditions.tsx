import { useEffect } from 'react';
import { useAppStore } from '@/store/app';

export const TermsConditionsPage = () => {
  const appStore = useAppStore();

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Términos y Condiciones',
      hideFooter: true,
    });
  }, []);

  return (
    <div className="grid grid-rows-[auto] gap-4">
      <div className="overflow-auto">
        <div className="h-0">
          <div className="flex flex-col items-start text-slate-900">
            <p className="text-sm text-slate-600">Version date: October 2024</p>
            <p>
              These terms and conditions apply to all users of this website. If you do not accept these terms then you
              should immediately stop using this website. Your use of the website confirms your acceptance of these
              terms. We will not be liable to you for any interruption or delay that you experience in accessing the
              website, whatever the cause. Please ensure that you also read, understood, and agreed to our Privacy
              Policy prior to using this site.
            </p>
            <h2 className="font-semibold">Content</h2>
            <p>
              All material on this website is protected by copyright. You may only copy, download, and reproduce it for
              your own personal use. You must not use it for reproduction on any other website, or in any way for
              commercial purposes or gain not listed below (where a separate licence is required) unless you first
              obtain our written consent.
            </p>
            <h2 className="font-semibold">Registration</h2>
            <p>
              Where any part of the website requires that you register in order to use it, you are obliged to provide
              accurate and complete registration information. It is your responsibility to update and maintain any
              changes to that information (including your e-mail address) by altering your details as appropriate. We
              will only process your personal data in accordance with our Privacy Policy.
            </p>
            <h2 className="font-semibold">Conditions of acceptance of advertisements</h2>
            <p>
              Please note these conditions apply solely to print and all forms of digital advertising. For
              <br />
              all other types of advertising/products please refer to the terms and conditions provided
              <br />
              to you at the time of ordering. If you require a further copy of such terms please contact
              <br />
              your sales representative.
            </p>
            <h2 className="font-semibold">Definitions relating to the Conditions of Acceptance of Advertisements:</h2>
            <ul>
              <li>be legal, decent, honest and truthful;</li>
              <li>be accurate and complete;</li>
              <li>
                not result in a breach of any relevant rules and regulations, including the provisions of the
                Advertising Standards Code of Practice
              </li>
              <li>not breach any legislation;</li>
              <li>not be defamatory;</li>
              <li>
                not infringe any copyright, trademarks or other legal rights of any person or company and that you have
                received any consent needed to refer to or portray people (expressly or impliedly) in the Advertisement;
                and
              </li>
              <li>when appearing on any website:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
