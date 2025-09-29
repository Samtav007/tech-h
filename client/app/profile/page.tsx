import ProfilePage from '@/components/pages/ProfilePage'

export const metadata = {
  title: 'Profile Settings - hömy',
  description: 'Manage your hömy account settings, preferences, and personal information.',
}

// Disable static generation for this page
export const dynamic = 'force-dynamic'

export default function Profile() {
  return <ProfilePage />
}
