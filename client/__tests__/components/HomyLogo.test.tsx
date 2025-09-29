import { render, screen } from '@testing-library/react'
import HomyLogo from '@/components/HomyLogo'

describe('HomyLogo', () => {
  it('renders the logo with correct text parts', () => {
    render(<HomyLogo />)
    
    const hoText = screen.getByText('hö')
    const myText = screen.getByText('my')
    
    expect(hoText).toBeInTheDocument()
    expect(myText).toBeInTheDocument()
  })

  it('renders with correct default size', () => {
    const { container } = render(<HomyLogo />)
    
    const logoContainer = container.firstChild as HTMLElement
    expect(logoContainer).toHaveClass('h-12', 'w-24')
  })

  it('renders with custom size', () => {
    const { container } = render(<HomyLogo size="lg" />)
    
    const logoContainer = container.firstChild as HTMLElement
    expect(logoContainer).toHaveClass('h-16', 'w-32')
  })

  it('renders SVG elements', () => {
    const { container } = render(<HomyLogo />)
    
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', '0 0 100 50')
  })

  it('applies custom className', () => {
    const { container } = render(<HomyLogo className="custom-class" />)
    
    const logoContainer = container.firstChild as HTMLElement
    expect(logoContainer).toHaveClass('custom-class')
  })
})
