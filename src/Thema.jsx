import styled from 'styled-components'

const SectionHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0;
`

const Tag = styled.div`
  list-style: none;
  border: solid 1px black;
  padding: 4px 10px;
  margin-bottom: 8px;
  border-radius: 20px;
  display: inline-block;
`

const Link = styled.a`
  color: black;
`

export { SectionHeader, Tag, Link }
