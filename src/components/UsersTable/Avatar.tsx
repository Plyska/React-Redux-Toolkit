import React from 'react'
import Avatar from '@mui/material/Avatar';
import { GridCellParams } from '@mui/x-data-grid';

interface AvatarProps {
  params: GridCellParams
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

const stringAvatar = (name: string) => {
  return {
    sx: { bgcolor: stringToColor(name) },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const AvatarCell: React.FC<AvatarProps> = ({ params }) => {
  const { name } = params.row

  return (
    <Avatar {...stringAvatar(name)} />
  )
}

export default AvatarCell