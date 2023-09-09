<template>
	<div class="h-screen flex flex-col">
		<header class="flex-shrink">
			<MyToolbar />
		</header>
		<div class="flex-grow overflow-auto">
			<main class="flex flex-col h-full">
				<UContainer class="w-full flex-grow p-12">
					<slot />
				</UContainer>
				<footer class="flex-shrink">
					<MyFooter />
				</footer>
			</main>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
