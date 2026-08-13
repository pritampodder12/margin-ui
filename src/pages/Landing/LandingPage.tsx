/**
 * Landing Page
 * Assembles all sections - matches original design exactly
 */

import * as React from 'react';
import { Navbar, Footer } from '@/layouts/RootLayout/components';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { HeroSection } from './components/HeroSection';
import { PathsSection } from './components/PathsSection';
import { ATSSection } from './components/ATSSection';
import { TemplatesSection } from './components/TemplatesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CTABanner } from './components/CTABanner';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <Navbar />

      <main>
        {/* Hero */}
        <Container>
          <HeroSection />
        </Container>

        <Container>
          <Separator />
        </Container>

        {/* Three Ways In */}
        <PathsSection />

        {/* ATS Score Section */}
        <ATSSection />

        {/* Templates */}
        <TemplatesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* CTA Banner */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
