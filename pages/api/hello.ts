// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mock } from 'mockjs';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
        },
      ],
    })
  );
}
