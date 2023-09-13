import React from 'react'
import styled from 'styled-components'
import useToggledVersion, { Version } from '../../hooks/useToggledVersion'

const VersionLabel = styled.span<{ enabled: boolean }>`
  padding: 0.35rem 0.6rem;
  border-radius: 12px;
  margin-left: 10px;
  background: ${({ theme, enabled }) => (enabled ? theme.primary1 : 'none')};
  color: ${({ theme, enabled }) => (enabled ? theme.white : theme.text1)};
  font-size: 1rem;
  font-weight: ${({ enabled }) => (enabled ? '500' : '400')};
  :hover {
    user-select: ${({ enabled }) => (enabled ? 'none' : 'initial')};
    background: ${({ theme, enabled }) => (enabled ? theme.primary1 : 'none')};
    color: ${({ theme, enabled }) => (enabled ? theme.white : theme.text1)};
  }
`

export default function VersionSwitch() {
  const version = useToggledVersion()


  const toggle = (
      <VersionLabel enabled={version === Version.v2 }>V2</VersionLabel>
  )
  return toggle;

}
