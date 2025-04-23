import React from 'react'

interface TabsProps {
  defaultValue: string
  children: React.ReactNode
  className?: string
}

interface TabsListProps {
  children: React.ReactNode
  className?: string
}

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

interface TabsContentProps {
  value: string
  children: React.ReactNode
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className = '', onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}