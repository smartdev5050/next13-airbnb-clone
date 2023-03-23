import { Nunito } from 'next/font/google'

import Navbar from '@/app/common/components/layout/Navbar';
import LoginModal from '@/app/common/components/modals/LoginModal';
import RegisterModal from '@/app/common/components/modals/RegisterModal';
import SearchModal from '@/app/common/components/modals/SearchModal';
import RentModal from '@/app/common/components/modals/RentModal';
import ToasterServer from '@/app/common/components/ToasterServer';

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterServer />
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        {/* @ts-expect-error Server Component */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
