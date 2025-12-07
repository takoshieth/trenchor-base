import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Redis } from '@upstash/redis';

const COOKIE_NAME = 'admin_auth';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function DELETE(request) {
  try {
    const authCookie = cookies().get(COOKIE_NAME);
    if (authCookie?.value !== 'true') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const tokenId = searchParams.get('tokenId');

    if (!tokenId) {
      return NextResponse.json({ error: "tokenId gerekli!" }, { status: 400 });
    }

    // Token bilgilerini sil
    await redis.del(`token:${tokenId}`);
    
    // Leaderboard'u sil
    await redis.del(`leaderboard:${tokenId}`);
    
    // User verilerini sil
    const userKeys = await redis.keys(`user:${tokenId}:*`);
    if (userKeys && userKeys.length > 0) {
      await redis.del(...userKeys);
    }
    
    // Token listesinden çıkar
    await redis.srem('tokens:list', tokenId);

    return NextResponse.json({ 
      success: true, 
      message: `Token "${tokenId}" deleted successfully` 
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
