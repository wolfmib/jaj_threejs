import pygame
import sys
import time

# Global setup
WIDTH, HEIGHT = 563, 1000
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
BLUE = (100, 149, 237)
RED = (255, 99, 71)
GRAY = (211, 211, 211)

pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Git Branch Animation")
font = pygame.font.SysFont(None, 40)

def draw_text(text, pos, color=BLACK):
    text_surf = font.render(text, True, color)
    screen.blit(text_surf, pos)

def scene1():
    screen.fill(WHITE)
    draw_text("Confused by Git branches?", (50, 100), BLUE)
    draw_text("Typo: 'feature/imissyou'", (50, 200), RED)
    draw_text("Typo: 'addvoicefordemo'", (50, 250), RED)
    draw_text(":(", (270, 350), BLACK)
    pygame.display.flip()
    time.sleep(3)  # duration for scene1

def scene2():
    screen.fill(WHITE)
    draw_text("You're not alone.", (150, 150), BLUE)
    draw_text("Let's fix Git step-by-step.", (100, 250), BLACK)
    pygame.display.flip()
    time.sleep(3)  # duration for scene2

def main():
    running = True
    show_intro = True

    _ = input("Press Enter to continue")

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                show_intro = True

        if show_intro:
            scene1()
            scene2()
            show_intro = False

    pygame.quit()
    sys.exit()

main()
